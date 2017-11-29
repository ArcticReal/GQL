'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var QueryType = new _graphql.GraphQLObjectType({
  name: 'testQuery',
  description: '...',

  fields: function fields() {
    return {
      test: {
        type: _graphql.GraphQLString
      }

    };
  }
});

exports.default = QueryType;