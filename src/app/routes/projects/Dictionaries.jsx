import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteDictionary } from 'redux/projects/actions';

import ModalDictionaryForm from 'components/modals/DictionaryForm';
import DictionaryListItem from 'components/DictionaryListItem';

class ProjectDictionaries extends Component {
  static propTypes = {
    deleteDictionary: PropTypes.func.isRequired,
    project: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired,
  };

  state = {
    modalDictionaryForm: false,
  };

  // handleOpenModal = () => {
  //   console.log('lalala');
  //   this.setState({ modalDictionaryForm: true });
  // };
  // handleCloseModal = () => this.setState({ modalDictionaryForm: false });

  handleDeleteDictionary = (dictionaryId) => {
    this.props.deleteDictionary(this.props.project.id, dictionaryId);
  };

  render() {
    const { project } = this.props;
    const { modalDictionaryForm } = this.state;

    return (
      <div>
        {modalDictionaryForm &&
          <ModalDictionaryForm
            closeModal={() => this.setState({ modalDictionaryForm: false })}
            projectId={project.id}
          />
        }

        <div className="row mb-3">
          <div className="col-md-8">
            <h3>Dictionaries</h3>
          </div>
          <div className="col-md-4 text-right">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.setState({ modalDictionaryForm: true })}
            >
              Add Dictionary +
            </button>
          </div>
        </div>
        {project.dictionaries.length > 0 &&
          <table className="table mb-4">
            <thead className="thead-default">
              <tr>
                <th>Name</th>
                <th>Desc</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {project.dictionaries.map(dict => (
                <DictionaryListItem
                  key={dict.id}
                  item={dict}
                  onDelete={this.handleDeleteDictionary}
                />
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return {
    project: projects.current
  };
}
export default connect(mapStateToProps, { deleteDictionary })(ProjectDictionaries);
