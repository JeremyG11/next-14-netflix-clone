import qs from "qs";
import { RemoveUrlQueryParams, UrlQueryParams } from "../../../types";

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value!;

  return qs.stringify({
    url: window.location.pathname,
    query: currentUrl,
  });
}

export function removeKeysFromQuery({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringify({
    url: window.location.pathname,
    query: currentUrl,
  });
}
