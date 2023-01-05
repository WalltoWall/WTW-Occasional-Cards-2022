const { fromFile } = require('@capsizecss/unpack');

const main = async () => {
    const fontMetrics = await fromFile('./greycliff.woff2')
    console.log(fontMetrics)
}

main()