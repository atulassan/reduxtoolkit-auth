import React, {useState} from 'react';

function Blog() {

    const [formValues, SetFormValues] = useState({});

    const inputValues = (e) => {
        console.log(e.target.name, e.target.value);
        formValues[e.target.name] = e.target.value;
        SetFormValues(formValues);
        console.log(formValues);
    }

    const submit = (e) => {
        console.log('Testing');    
    }



    return(
        <>
            <div>
                <h1>Blog</h1>
                <form>
                    <p><label for="title">Title:</label> <input onChange={inputValues} name='title' value={formValues.title} type='text' htmlFor="title" /></p>
                    <p><label for="desc">Desc:</label> <textarea onChange={inputValues} name='desc' value={formValues.desc} htmlFor="desc"></textarea></p>
                    <button onClick={submit}>Button</button>
                </form>
            </div>
        </>
    )

}

export default Blog;