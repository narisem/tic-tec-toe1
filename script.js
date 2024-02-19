const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

const handleClick = (e) => {
  // セルに現在のプレイヤーのマークを追加
  e.target.textContent = currentPlayer;
  // 勝者がいるか、または引き分けかどうかをチェック
  // 勝者の判定ロジックをここに実装...
  // プレイヤーを切り替え
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

// プレイヤーのターンを表示するコードを追加
const updateTurnDisplay = () => {
  const turnDisplay = document.querySelector('p');
  turnDisplay.textContent = `${currentPlayer} 의 턴`;
};

// リセットボタンの機能を追加
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = ''; // セルのテキストをクリア
    cell.removeEventListener('click', handleClick); // 既存のイベントリスナーを削除
    cell.addEventListener('click', handleClick, { once: true }); // イベントリスナーを再度追加
  });
  currentPlayer = 'X'; // プレイヤーを初期値にリセット
  updateTurnDisplay(); // ターン表示を更新
});
