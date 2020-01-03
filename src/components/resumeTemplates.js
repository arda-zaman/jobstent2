import React from 'react';
import { Select, Card, AdvertiseBox } from './fields';

class ResumeTemplates extends React.Component {

  componentDidMount() {
    // axios.post('/api/template/create-pdf', {
    //   pdfID: 255, content: {
    //     name: 'Arda', price1: 543, price2: 164, receiptId: '1235', themeProps: {
    //       colors: {
    //         mainColor: '#fff',
    //         sidebarColor: '#63c9bb'
    //       }
    //     }
    //   }
    // }).then(res => {
    //   const anchorTag = document.createElement('a');
    //   anchorTag.href = res.data;
    //   anchorTag.download = "My PDF File.pdf";
    //   anchorTag.click();

    //   // const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    //   // saveAs(pdfBlob, 'arda.pdf');
    // });
  }

  render() {
    return (
      <div className="resume-templates" padding-vertical="true">
        <div className="container">
          <div className="resume-templates-container">
            <div className="content-container">
              <aside className="left-area">
                <Card
                  additionalClass="filter-box"
                  title={{
                    icon: {
                      type: 'material-icons',
                      text: 'filter_list'
                    },
                    text: 'Filter Templates'
                  }}
                >
                  <div className="box-content">
                    <div className="box-item">
                      <Select
                        label="Category"
                        placeholder="Priority"
                        // onChange={this.selectChangeHandler.bind(this)}
                        // value={activeTask.priority}
                        options={[
                          { value: "Simple", label: "Simple" },
                          { value: "Professional", label: "Professional" },
                          { value: "Modern", label: "Modern" },
                          { value: "Creative", label: "Creative" },
                        ]}
                      />
                    </div>
                    <div className="box-item">
                      <Select
                        label="Profession"
                        placeholder=""
                        // onChange={this.selectChangeHandler.bind(this)}
                        // value={activeTask.priority}
                        options={[
                          { value: "computer-science", label: "Computer Science" },
                          { value: "engineer", label: "Engineer" },
                          { value: "pilot", label: "Pilot" },
                        ]}
                      />
                    </div>

                    <div className="box-item rating">
                      <span className="low">Rating</span>
                      <div className="star-group flex a-center">
                        <i className="material-icons selected">star</i>
                        <i className="material-icons selected">star</i>
                        <i className="material-icons selected">star</i>
                        <i className="material-icons selected">star</i>
                        <i className="material-icons">star</i>
                        <small>(4 Selected)</small>
                      </div>
                    </div>
                  </div>
                </Card>
                <AdvertiseBox width={300} height={250} />
              </aside>

              <div className="content">
                <div className="applied-filters"></div>
                <div className="templates">
                  <div className="template-item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResumeTemplates;