import * as React from 'react';
import { Document, Page } from 'react-pdf';

const Resume: React.FC = () => {
    return(
        <>
            <h1>Resume Page</h1>
            <Document file='./f20_resume.pdf'>
                <Page pageNumber={1} />
            </Document>
        </>
    )
}

export default Resume;