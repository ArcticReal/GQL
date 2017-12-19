import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const CustRequestWorkEffortInputType = new GraphQLInputObjectType({
  name: 'CustRequestWorkEffortInputType',
  description: 'input type for CustRequestWorkEffort',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CustRequestWorkEffortInputType};
    