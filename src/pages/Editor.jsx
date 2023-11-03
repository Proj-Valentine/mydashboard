import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar} from "@syncfusion/ej2-react-richtexteditor"
import { EditorData } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const Editor = () => {
  const { currentMode } = useStateContext();


  return (
         <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl" style={{backgroundColor:currentMode === 'Dark' ? '#33373E' : '#fff'}}>
            <Header category="App" title="Editor"/>
            <RichTextEditorComponent>
              {/* add pre defined  data But you can type anything/ delete to create empty editor */}
              <EditorData/>
              <Inject services={[HtmlEditor, Toolbar,Image, Link, QuickToolbar]}/>
            </RichTextEditorComponent>

   
          </div>
  )
}

export default Editor
