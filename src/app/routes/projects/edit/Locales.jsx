import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteLocale } from 'redux/locales/actions';

import ModalLocaleNew from 'components/modals/LocaleNew';
import LocaleTableItem from 'components/LocaleTableItem';

class ProjectEditLocales extends Component {
  static propTypes = {
    deleteLocale: PropTypes.func.isRequired,
    project: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired,
    locales: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    modalLocaleNew: false,
  };

  handleDeleteLocale = (localeId) => {
    this.props.deleteLocale(this.props.project.id, localeId);
  };

  render() {
    const { project, locales } = this.props;
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
        {locales.length > 0 &&
          <table className="table mb-4">
            <thead className="thead-default">
              <tr>
                <th>Key</th>
                <th>Label</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {locales.map(locale => (
                <LocaleTableItem
                  isDefault={locale.id === project.defaultLocale}
                  key={locale.id}
                  locale={locale}
                  onDelete={this.handleDeleteLocale}
                />
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

function mapStateToProps({ projects, locales }) {
  return {
    project: projects.current,
    locales: locales.entriesIds.map(id => locales.entries[id]),
  };
}
export default connect(mapStateToProps, { deleteLocale })(ProjectEditLocales);
