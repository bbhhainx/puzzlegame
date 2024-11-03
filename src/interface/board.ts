import { CollisionType } from './game'
import { ITetromino } from './tetromino'

/** các kiểu va chạm */
// export type CollisionType = 'BOTTOM' | 'BOARD' | 'LEFT' | 'RIGHT' |'NONE'

/** bảng chứa các khối được xếp */
export interface IBoad {
  /** độ rộng của 1 mắt lưới trong bảng */
  grid: number[][]
  /** chiều rộng của bảng */
  width: number
  /** chiều cao của bảng */
  height: number

  /** lấy ra hàng đầu tiền */
  getFirstRow: () => number[]
  /** thêm khôi vào bảng */
  addTetromino: (tetromino: ITetromino) => void
  /** kiển tra va chạm 2 bên */
  checkCollisionLeftRight: (tetromino: ITetromino) => CollisionType
  /** kiển tra va chạm */
  // checkCollision: (tetromino: ITetromino) => CollisionType
  /** xóa các hàng đã được lấp đầy */
  clearFullRows: () => void
  /** reset bảng */
  clearBoard: () => void
}

