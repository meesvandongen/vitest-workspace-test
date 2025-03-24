import { defineConfig } from 'vitest/config';


export default defineConfig({
  test: {
    workspace: [
      {
        test: {
          name: 'jsdom',
          environment: 'jsdom',
          include: ['**/*.jsdom.{spec,test}.ts']
        }
      },
      {
        
        test: {
          name: 'node',
          environment: 'node',
          include: ['**/*.node.{spec,test}.ts']
        }
      }
    ]
  }
});