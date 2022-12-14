import{_ as n,c as t,o,a as e}from"./app.ea5ad1cf.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"getDevice/index.md"}'),r={name:"getDevice/index.md"},s=e("pre",null,[e("code",null,`---
category: UA
---

# getDevice
\u7528\u4E8E\u4ECE User-Agent(\u7528\u6237\u4EE3\u7406\u6570\u636E) \u4E2D\u89E3\u6790\u51FA \`\u8BBE\u5907\u7C7B\u578B\u4E0E\u4F9B\u5E94\u5546\`\uFF0C\u5728\u6D4F\u89C8\u5668\uFF08\u5BA2\u6237\u7AEF\uFF09\u6216 node.js\uFF08\u670D\u52A1\u5668\u7AEF\uFF09\u4E2D\u4F7F\u7528\u3002

## Usage

\`\`\` ts
  import { getDevice } from "@vmejs/core"

  const browser = getDevice()

  // do something
\`\`\`

## \u6587\u6863

### \u53C2\u6570 [ua]\uFF1A\u53EF\u9009]

-   \u6D4F\u89C8\u5668\uFF08\u5BA2\u6237\u7AEF\uFF09\u4E2D\u4F7F\u7528 [ua\u53EF\u9009]

    \`\`\`
      import { getDevice } from "@vmejs/core"
      // \u672A\u5E26\u53C2\u6570
      const browser = getDevice()

      // \u4F7F\u7528\u53C2\u6570
      const browser = getDevice(window.navigator.userAgent)
    \`\`\`

-   node.js\uFF08\u670D\u52A1\u5668\u7AEF\uFF09\u4E2D\u4F7F\u7528 [ua\u5FC5\u4F20]

    \`\`\`
      import http from 'http'
      import { getDevice } from "@vmejs/core"

      http.createServer(function (req, res) {
          // get user-agent header
          const browser = getDevice(req.headers['user-agent']);

          // write the result as response
          res.end(JSON.stringify(ua, null, '  '));
      })
      .listen(3000, '127.0.0.1');
    \`\`\`

### \u8FD4\u56DE\u503C\uFF1A\`{model: '', vendor: ''}\`

-   device.model\uFF1A\u5E38\u89C1\u8BBE\u5907\u7C7B\u578B

    \`\`\`
    # Chrome/\u5176\u5B83
    pc

    # ios/android/\u5E73\u677F
    mobile
    \`\`\`

-   device.vendor\uFF1A\u5E38\u89C1\u4F9B\u5E94\u5546

    \`\`\`
    # mobile \u5E38\u89C1\u4F9B\u5E94\u5546\uFF1A
    Samsung, Apple, Coogle, Huawei, Xiaomi, OPPO, Vivo

    # \u5176\u5B83
    other
    \`\`\`
`)],-1),i=[s];function c(a,d,m,g,p,l){return o(),t("div",null,i)}const _=n(r,[["render",c]]);export{u as __pageData,_ as default};
