import { LoadingOutlined } from "@ant-design/icons"

export const AppLoader = () => {
  return (
    <div className="flex h-full w-full min-h-screen items-center justify-center">
        <LoadingOutlined
            className="text-red-600 text-5xl cus-sm:text-4xl cus-sm2:text-3xl"
        />
    </div>
  )
}