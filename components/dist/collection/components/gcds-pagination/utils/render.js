/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
function constructHref(url, page, end) {
  let fragment = "";
  let qs = "";
  let count = 0;
  for (const key in url.queryStrings) {
    let queryKey = key;
    let queryValue = url.queryStrings[key];
    if (key.includes("::")) {
      let incrementer = key.split("::")[1];
      let regExp = /\{\{([^)]+)\}\}/;
      let matches = regExp.exec(url.queryStrings[key]);
      // Offeset numbers
      if (incrementer == "offset") {
        let pageNumber = page;
        if (end == "next") {
          ++pageNumber;
        }
        else if (end == "previous") {
          --pageNumber;
        }
        queryValue = matches ?
          url.queryStrings[key].replace(`{{${matches[1]}}}`, `${((pageNumber - 1) * Number(matches[1]))}`)
          :
            ((pageNumber - 1) * url.queryStrings[key]);
        queryKey = queryKey.replace("::offset", "");
      }
      // Match page number
      if (incrementer == "match") {
        let pageNumber = page;
        if (end == "next") {
          ++pageNumber;
        }
        else if (end == "previous") {
          --pageNumber;
        }
        queryValue = matches ?
          url.queryStrings[key].replace(`{{${matches[1]}}}`, `${(pageNumber * Number(matches[1]))}`)
          :
            (pageNumber * url.queryStrings[key]);
        queryKey = queryKey.replace("::match", "");
      }
    }
    if (count == 0) {
      qs += `?${queryKey}=${queryValue}`;
    }
    else {
      qs += `&${queryKey}=${queryValue}`;
    }
    ++count;
  }
  if (url.fragment) {
    fragment = `#${url.fragment}`;
  }
  let href = `${qs}${fragment}`;
  return href;
}
/**
 * Function to constuct classes to help with mobile sizing
 */
function constructClasses(page, current, total) {
  if (total <= 5) {
    return "";
  }
  else if (current == 1 || current == total) {
    if (current - page == 4 || current - page == -4) {
      return "gcds-pagination-list-breakpoint-360";
    }
    else if (current - page == 5 || current - page == -5) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page > 5 || current - page < -5) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if (current == 2 || current == (total - 1)) {
    if (current - page == 3 || current - page == -3) {
      return "gcds-pagination-list-breakpoint-360";
    }
    else if (current - page == 4 || current - page == -4) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page > 4 || current - page < -4) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if ((current > 2 && current < (total - 1)) && (total < 10 && current == 5)) {
    if (current - page == 2 || current - page == -2) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page >= 3 || current - page <= -3) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
  else if (current > 2 && current < (total - 1)) {
    if (current - page == 2 || current - page == -2) {
      return "gcds-pagination-list-breakpoint-420";
    }
    else if (current - page == 3 || current - page == -3) {
      return "gcds-pagination-list-breakpoint-460";
    }
    else if (current - page > 3 || current - page < -3) {
      return "gcds-pagination-list-breakpoint-488";
    }
  }
}
export { constructClasses, constructHref };
