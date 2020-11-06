export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'}, 
    I: {
        shape: [
                
                [0,'I', 0, 0],
                [0,'I', 0, 0],
                [0,'I', 0, 0],
                [0,'I', 0, 0]
               ],
            color: '26, 188, 156'
    },
    J: {
        shape: [
                
                [0,'J', 0],
                [0,'J', 0],
                ['J','J', 0]
               ],
            color: '52, 152, 219'
    },
    L: {
        shape: [
                
                [0,'L', 0],
                [0,'L', 0],
                [0,'L', 'L']
               ],
            color: '241, 196, 15'
    },
    O: {
        shape: [
                
                ['O','O'],
                ['O','O'],
               ],
            color: '223, 217, 36'
    },
    S: {
        shape: [
                
                [0, 'S','S'],
                ['S','S', 0],
                [0, 0, 0]
               ],
            color: '46, 204, 113'
    },
    T: {
        shape: [
                
                [0, 0, 0],
                ['T','T', 'T'],
                [0, 'T', 0]
               ],
            color: '155, 89, 182'
    },
    Z: {
        shape: [
                
                ['Z','Z', 0],
                [0,'Z', 'Z'],
                [0, 0, 0]
               ],
            color: '231, 76, 60'
    }


}
export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = 
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}