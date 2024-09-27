declare module "*.svg" {
  const content: any; // 这里可以更精确地定义返回类型
  export default content;
}
