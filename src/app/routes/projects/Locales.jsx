import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteLocale, updateLocale } from 'redux/projects/actions';

import ModalLocaleNew from 'components/modals/LocaleNew';
import LocaleTableItem from 'components/LocaleTableItem';

class ProjectLocales extends Component {
  static propTypes = {
    deleteLocale: PropTypes.func.isRequired,
    updateLocale: PropTypes.func.isRequired,
    project: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired,
  };

  state = {
    modalLocaleNew: false,
  };

  handleDeleteLocale = (localeId) => {
    this.props.deleteLocale(this.props.project.id, localeId);
  };

  render() {
    const { project } = this.props;
    const { modalLocaleNew } = this.state;

    return (
      <div>
        {modalLocaleNew &&
          <ModalLocaleNew closeModal={() => this.setState({ modalLocaleNew: false })} projectId={project.id} />
        }

        <div className="row mb-3">
          <div className="col-md-8">
            <h3>Locales</h3>
          </div>
          <div className="col-md-4 text-right">
            <button type="submit" className="btn btn-primary" onClick={() => this.setState({ modalLocaleNew: true })}>
              Add locale +
            </button>
          </div>
        </div>
        {project.locales.length > 0 &&
          <table className="table mb-4">
            <thead className="thead-default">
              <tr>
                <th>Key</th>
                <th>Label</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {project.locales.map(locale => (
                <LocaleTableItem
                  isDefault={locale.id === project.default_locale}
                  key={locale.id}
                  locale={locale}
                  onDelete={this.handleDeleteLocale}
                  onUpdate={this.props.updateLocale}
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
export default connect(mapStateToProps, { deleteLocale, updateLocale })(ProjectLocales);
