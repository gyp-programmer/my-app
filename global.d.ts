declare module "*.svg" {
  const content: any; // 这里可以更精确地定义返回类型
  export default content;
}

declare module "*.jpeg" {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "three/*";
declare module "three";
