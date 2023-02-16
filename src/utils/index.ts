type TexamplePromise = () => Promise<{
  status: 'success' | 'failed';
  code: number;
  value?: number;
}>

export const examplePromise : TexamplePromise = () => new Promise((resolve, reject) => {
  resolve({
    status: 'success',
    code: 200,
    value: 20,
  })

  reject({
    status: 'failed',
    code: 400,
    value: null,
  })
})