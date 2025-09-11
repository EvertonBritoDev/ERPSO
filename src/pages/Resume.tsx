import { MenuPage, ResumePage } from '@/components'
function Resume() {
  return (
    <div>
      <MenuPage />

      <div className="fade-in">
        <ResumePage></ResumePage>
      </div>
    </div>
  )
}

export default Resume
