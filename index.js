const data = require('./data.json')
/*  Data Format:
    Time		    Pump Rate		Depth		    Speed		    Hydrostatic     Pressure      	Weight
*/
const fs = require('fs')

const width = 100
const height = 100

let x = Math.round(width/2)
let y = Math.round(width/2)
let imageArr = []
// let imageBuf = new Buffer(width*height)

for (let i=0; i < x; i++) {
    let D = data[i]
    
    let voxel = D[1]*64 + D[2]*32 + D[3]*16 + D[4]*8 + D[5]
    
    imageArr.push(voxel)
}

let B = Buffer.from(imageArr)

console.log(B)

// bmp = fs.readFileSync('image.bmp')

fs.writeFileSync('image2.bmp', B)

// let imageBuf = new Buffer(imageArr)

// fs.open('image.bmp', (err,fd)=>{
//     fs.write(fd, imageBuf, 0, imageBuf.length, null, (err)=>{
//         fs.close(fd, ()=>{
//             console.log('wrote image.bmp')
//         })
//     })
// })


// // swirly
// for (let size=0; size < width; size++) {
//     // write this pixel: (x,y)
//     // increment x until it's at 
// }