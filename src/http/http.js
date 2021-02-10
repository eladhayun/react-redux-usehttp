export const globalOptions = () => ({
  cachePolicy: 'no-cache',
  interceptors: {
    request: ({ options }) => {
      options.headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
      return options
    },
    response: async ({ response }) => {
      const { status } = response
      if (status === 401) {
        // const url = `${window.location.origin}${process.env.PUBLIC_URL}${routes.signIn}`
        // window.location.replace(url)
      }
      return response
    },
  },
})
