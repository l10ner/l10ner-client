import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';
import Link from 'react-router/lib/Link';
// import { connect } from 'react-redux';


class ProjectEdit extends Component {
  static propTypes = {
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldProps: PropTypes.func.isRequired,
      getFieldError: PropTypes.func.isRequired,
      setFields: PropTypes.func.isRequired,
    }).isRequired,
    project: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired,
    locales: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired).isRequired,
    onUpdateProject: PropTypes.func.isRequired
  };

  submit = () => {
    this.props.form.validateFields((error, values) => {
      if (!error) {
        this.props.onUpdateProject({
          ...values,
          id: this.props.project.id
        })
          .catch((err) => {
            this.props.form.setFields({
              __: {
                errors: [new Error(err.data.name)],
              },
            });
          });
      }
    });
  };

  renderLocalesDropdown() {
    const { project, locales } = this.props;
    const isEmpty = locales.length === 0;
    const { getFieldProps } = this.props.form;

    return (
      <div className="form-group">
        <label htmlFor="defaultLocale">Default locale</label>
        {isEmpty ?
          <div>
            <Link to={`/projects/${project.id}/edit/locales`}>Please add locales</Link>
          </div>
          :
          <select
            {...getFieldProps('defaultLocale', {
              initialValue: project.defaultLocale || locales[0].id || '',
              rules: [],
              getValueFromEvent(e) {
                return Number(e.target.value);
              }
            })}
            className="form-control"
            id="defaultLocale"
            disabled={isEmpty}
          >
            {locales.map(o => (
              <option value={o.id} key={o.id}>{o.label} ({o.key})</option>
            ))}
          </select>
        }
      </div>
    );
  }
  render() {
    const { project } = this.props;
    const { getFieldProps, getFieldError, } = this.props.form;
    const nameError = getFieldError('name');
    const descError = getFieldError('desc');
    // const formErros = getFieldError('__');

    return (
      <div>
        <div className="form-group">
          <label htmlFor="projectName">Name</label>
          <input
            {...getFieldProps('name', {
              initialValue: project.name,
              rules: [{ required: true }],
            })}
            id="projectName"
            className="form-control"
            placeholder="Рога и Копыта"
          />
          {nameError && nameError.join(',')}
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea">Description</label>
          <textarea
            {...getFieldProps('desc', {
              initialValue: project.desc,
              rules: [],
            })}
            className="form-control"
            id="exampleTextarea"
            rows="3"
            placeholder="Черноморское отделение Арбатовской конторы по заготовке рогов и копыт"
          />
          {descError && descError.join(',')}
        </div>
        {this.renderLocalesDropdown()}
        <button onClick={this.submit} className="btn btn-primary">Save</button>
      </div>
    );
  }
}


// function mapStateToProps({ projects }) {
//   return {
//     project: projects.current
//   };
// }

export default createForm({
  // mapPropsToFields({ project }) {
  //   return {
  //     name: project.name,
  //     desc: project.desc,
  //   };
  // }
})(ProjectEdit);
