import React, {useCallback} from 'react'
import Dropzone, {useDropzone} from 'react-dropzone'

export default  () => {

    return(
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
                <section>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                </section>
            )}
        </Dropzone>
    )

}