import { defineConfig, loadEnv } from "vite";
import { resolve } from 'path';

export default defineConfig(({mode: _mode, command: _command}) => {

  // .evn 配置文件引入
  const ENV_CONFIG = loadEnv(_mode, resolve(process.cwd(), 'env-profile'));
  console.log(".evn 配置内容: ", ENV_CONFIG);

  return {
    // 项目路径
    base: ENV_CONFIG.VITE_ENV_BASE,

    // 路径别名
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: "@",
          replacement: resolve(process.cwd(), 'src')
        }
      ]
    }
  };
})