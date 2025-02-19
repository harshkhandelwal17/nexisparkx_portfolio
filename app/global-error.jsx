// import Error from "next/error";

// export default function GlobalError() {
//   return (
//     <html>
//       <body>
//         <Error />
//       </body>
//     </html>
//   );
// }
"use client";

import React from "react";

class GlobalError extends React.Component {
  render() {
    return <div>Something went wrong!</div>;
  }
}

export default GlobalError;
