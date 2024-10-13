import { ITetromino } from './tetromino'

/** các kiểu va chạm */
export type CollisionType = 'LEFT' | 'RIGHT' | 'BOTTOM' | 'BOARD' | 'NONE'

/** bảng chứa các khối được xếp */
export interface IBoad {
  /** độ rộng của 1 mắt lưới trong bảng */
  grid: number[][]
  /** chiều rộng của bảng */
  width: number
  /** chiều cao của bảng */
  height: number

  /** thêm khôi vào bảng */
  addTetromino: (tetromino: ITetromino) => void
  /** kiển tra va chạm */
  checkCollision: (tetromino: ITetromino) => CollisionType
  /** xóa các hàng đã được lấp đầy */
  clearFullRows: () => void
}
