import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@heroicons/react/outline'

function BackButton() {
  const router = useRouter()

  function handleClick() {
    router.back()
  }

  return (
    <button onClick={handleClick} className="absolute top-0 left-0 p-2">
      <ChevronLeftIcon className="h-5 w-5 text-white" />
    </button>
  )
}

export default BackButton
