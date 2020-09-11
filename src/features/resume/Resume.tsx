import * as React from 'react';
import { Document, Page } from 'react-pdf';

import * as myfile from '../resume/f20_resume.pdf';

const Resume: React.FC = () => {
    return(
        <>
            <h1>Resume Page</h1>
            <Document file={myfile} onLoadError={console.error}>
                <Page pageNumber={1} />
            </Document>
        </>
    )
}

export default Resume;