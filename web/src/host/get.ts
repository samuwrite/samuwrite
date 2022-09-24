export const getHost = (): "mac" | "web" => {
  if ((window as any).webkit !== undefined) return "mac";
  return "web";
};
