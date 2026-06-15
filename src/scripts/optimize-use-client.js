const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", "app");

// List of React hooks that require Client Component environment
const CLIENT_HOOKS = [
  "useState",
  "useEffect",
  "useRef",
  "useContext",
  "useMemo",
  "useCallback",
  "useReducer",
  "usePathname",
  "useRouter",
  "useSearchParams",
  "useId",
  "useTransition",
  "useDeferredValue",
  "useImperativeHandle",
  "useInsertionEffect",
  "useLayoutEffect",
  "useSyncExternalStore"
];

// List of HTML event handlers that trigger client execution
const EVENT_HANDLERS = [
  "onClick=",
  "onChange=",
  "onSubmit=",
  "onKeyDown=",
  "onFocus=",
  "onBlur=",
  "onMouseEnter=",
  "onMouseLeave=",
  "onClick={",
  "onChange={",
  "onSubmit={",
  "onKeyDown={",
  "onFocus={",
  "onBlur={",
  "onMouseEnter={",
  "onMouseLeave={"
];

let optimizedCount = 0;

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".js")) {
      optimizeFile(fullPath);
    }
  }
}

function optimizeFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  
  // Check if file starts with "use client"
  const hasUseClient = content.match(/^\s*['"]use client['"];?\s*/);
  if (!hasUseClient) return;

  const directive = hasUseClient[0];
  const relativePath = path.relative(APP_DIR, filePath);

  // Exclude files that obviously use client hooks or handlers
  const hasHooks = CLIENT_HOOKS.some(hook => content.includes(hook));
  const hasEvents = EVENT_HANDLERS.some(handler => content.includes(handler));

  if (!hasHooks && !hasEvents) {
    // Safely remove the "use client" directive
    content = content.replace(/^\s*['"]use client['"];?\s*/, "");
    
    // Write back the modified content
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`[OPTIMIZED] converted ${relativePath} to Server Component (removed "use client")`);
    optimizedCount++;
  }
}

console.log("Starting Next.js Server Components Migration Optimization...");
walkDir(APP_DIR);
console.log(`Migration Complete. Optimized ${optimizedCount} static components.`);
