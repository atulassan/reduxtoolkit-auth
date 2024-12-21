import React, { useMemo, useState } from 'react';

function About() {

    const [brickSize, setBrickSize] = useState(
            { brickWidth: 7.5, 
            brickHeight: 3.5, 
            wallWidth: 0, 
            wallHeight: 0, 
            gapWidth: 0, 
            gapHeight: 0 }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBrickSize(prevState => ({ ...prevState, [name]: Number(value) }));
        console.log('handle Change++++', brickSize);
    }

    const brickCalcy = (brickSize) => {
        const squareInches = 144;
        let wallSqrInches = 0;
        const brickSqrInches = brickSize.brickWidth * brickSize.brickHeight;
        console.log('brickCalcy1+++++', brickSqrInches);
        const wallOnly = [brickSize.brickWidth, brickSize.brickHeight, brickSize.wallWidth, brickSize.wallHeight].every(n => n > 0);
        const gapOnly = [brickSize.gapWidth, brickSize.gapHeight].every(n => n> 0);
        if (wallOnly) {
            wallSqrInches = (brickSize.wallWidth * brickSize.wallHeight) * squareInches;
        }
        if (wallOnly && gapOnly) {
            wallSqrInches -= (brickSize.gapWidth * brickSize.gapHeight) * squareInches
        }
        console.log('brickCalcy+++++', brickSize, brickSqrInches, wallOnly, gapOnly);
        return wallSqrInches ? Math.round(wallSqrInches / brickSqrInches) : wallSqrInches;
    }

    const brickCalcyResult = useMemo(() => brickCalcy(brickSize), [brickSize]);

    return (
        <>
            <h1>Brick Calcy</h1>
            <form id="BrickCalcy">
                <p>
                    <label>Brick Width In</label> <input type='text' name="brickWidth" onChange={handleChange} value={'brickWidth' in brickSize ? brickSize.brickWidth : 7.5} />
                </p>
                <p>
                    <label>Brick Height In</label> <input type='text' name="brickHeight" onChange={handleChange} value={'brickHeight' in brickSize ? brickSize.brickHeight : 3.5} />
                </p>
                <p>
                    <label>Wall Width ft</label> <input type='text' name="wallWidth" onChange={handleChange} value={'wallWidth' in brickSize ? brickSize.wallWidth : 0} />
                </p>
                <p>
                    <label>Wall Height ft</label> <input type='text' name="wallHeight" onChange={handleChange} value={'wallHeight' in brickSize ? brickSize.wallHeight : 0} />
                </p>
                <p>
                    <label>gap width ft</label> <input type='text' name="gapWidth" onChange={handleChange} value={'gapWidth' in brickSize ? brickSize.gapWidth : 0} />
                </p>
                <p>
                    <label>Wall Height ft</label> <input type='text' name="gapHeight" onChange={handleChange} value={'gapHeight' in brickSize ? brickSize.gapHeight : 0} />
                </p>
            </form>
            <p>Final result : {brickCalcyResult}</p>
        </>
    )
}

export default About;