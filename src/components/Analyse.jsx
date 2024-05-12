import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";


export const Analyse = () => {
    const exampleAnalyses = [
    { id: 1, nom: 'Anayse de ..'},
    { id: 2, nom: 'Anayse de ..'},
    { id: 3, nom: 'Anayse de ..'},
    { id: 4, nom: 'Anayse de ..'},
    { id: 5, nom: 'Anayse de ..'},
    
];
    const [analyses, setAnalyses] = useState(exampleAnalyses);
    const [visible, setVisible] = useState(false);
    const [visibled, setVisibled] = useState(false);
    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="font-bold white-space-nowrap">Nouvelles analyses</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Envoyer" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
    const deleteButton = (rowData) => {
        return (<>
        <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
        <Dialog className='bg-white' header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
        </>
        )
    };
    
  return (
    
    <div>

   
<div className='flex justify-between items-center'>
            <div className='flex m-5 '>
                <i className="pi pi-file-o mr-2 text-[3.35rem]"></i>
                <h1 className='text-[2.35rem] font-semibold'>Analyses</h1>
            </div >
                <Button className="text-white px-3 py-[.75rem] transition duration-200 ease-in-out mr-5" onClick={()=> setVisibled(true)}>
                    Nouvelles analyses
                </Button>
                <Dialog visible={visibled} modal header={headerElement} footer={footerContent} style={{ width: '30rem' }} onHide={() => setVisibled(false)}>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="nom">
                        Nom :
                        </label>
                        <InputText class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nom" type="text" placeholder="nom" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="lien">
                        Lien du document :
                        </label>
                        <InputText class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lien" type="text" placeholder="lien" />
                    </div>
                    <div class="mb-4 mt-2">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
                        Langue d'explication :
                        </label>
                        <select
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="childrenCount">
                        <option>Arabe</option>
                        <option>Français</option>
                        <option>Anglais</option>
                        </select>
                    </div>
                </Dialog>
            </div>



    <div className="m-auto card w-1/2" >
        <DataTable value={analyses}  tableStyle={{ minWidth: '20rem', marginLeft: '0rem'}}>
            <Column field="id" header="Id" style={{ width: '1%', textAlign:'center'}}></Column>
            <Column field="nom" header="Nom" style={{ width: '1%' }}></Column>
            <Column header="Explication" body={deleteButton} style={{ width: '1%', paddingRight:'0px', textAlign:'center' }} />
        </DataTable>
    </div>
    
    </div>
  )
}
