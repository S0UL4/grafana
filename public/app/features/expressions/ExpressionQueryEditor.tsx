import React, { PureComponent } from 'react';

import { DataSourceApi, QueryEditorProps, SelectableValue } from '@grafana/data';
import { InlineField, Select } from '@grafana/ui';

import { ClassicConditions } from './components/ClassicConditions';
import { Math } from './components/Math';
import { Reduce } from './components/Reduce';
import { Resample } from './components/Resample';
import { ExpressionQuery, ExpressionQueryType, gelTypes } from './types';
import { getDefaults } from './utils/expressionTypes';

type Props = QueryEditorProps<DataSourceApi<ExpressionQuery>, ExpressionQuery>;

const labelWidth = 14;
export class ExpressionQueryEditor extends PureComponent<Props> {
  onSelectExpressionType = (item: SelectableValue<ExpressionQueryType>) => {
    const { query, onChange } = this.props;

    onChange(getDefaults({ ...query, type: item.value! }));
  };

  renderExpressionType() {
    const { onChange, onRunQuery, query, queries } = this.props;
    const refIds = queries!.filter((q) => query.refId !== q.refId).map((q) => ({ value: q.refId, label: q.refId }));

    switch (query.type) {
      case ExpressionQueryType.math:
        return <Math onChange={onChange} query={query} labelWidth={labelWidth} onRunQuery={onRunQuery} />;

      case ExpressionQueryType.reduce:
        return <Reduce refIds={refIds} onChange={onChange} labelWidth={labelWidth} query={query} />;

      case ExpressionQueryType.resample:
        return <Resample query={query} labelWidth={labelWidth} onChange={onChange} refIds={refIds} />;

      case ExpressionQueryType.classic:
        return <ClassicConditions onChange={onChange} query={query} refIds={refIds} />;
    }
  }

  render() {
    const { query } = this.props;
    const selected = gelTypes.find((o) => o.value === query.type);

    return (
      <div>
        <InlineField label="Operation" labelWidth={labelWidth}>
          <Select options={gelTypes} value={selected} onChange={this.onSelectExpressionType} width={25} />
        </InlineField>
        {this.renderExpressionType()}
      </div>
    );
  }
}
