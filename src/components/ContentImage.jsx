import {
  createElement,
  useState,
} from "react";

function getImageUrl(source) {
  if (!source) {
    return "";
  }

  let cleanPath = source;

  if (cleanPath.startsWith("/")) {
    cleanPath = cleanPath.slice(1);
  }

  if (cleanPath.startsWith("public/")) {
    cleanPath = cleanPath.slice(7);
  }

  return import.meta.env.BASE_URL + cleanPath;
}

export default function ContentImage({
  source,
  alt = "",
  className = "",
  loading = "lazy",
}) {
  const [hasError, setHasError] =
    useState(false);

  const imageUrl = getImageUrl(source);

  if (!imageUrl || hasError) {
    return null;
  }

  return createElement("img", {
    src: imageUrl,
    alt,
    loading,
    className,
    onError: () => setHasError(true),
  });
}