export function verify(value:string, pattern:RegExp) {
    if(value === "") return false;

    if(!pattern.test(value)) return false

    return true;
}

export function protect(string: string) {
    const specialChars: any = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
    };
  
    return string.replace(/[&<>"'`=\/]/g, function (char) {
      return specialChars[char];
    });
}