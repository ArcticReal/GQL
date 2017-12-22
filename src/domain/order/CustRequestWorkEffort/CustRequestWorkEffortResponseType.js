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

const CustRequestWorkEffortResponseType = new GraphQLObjectType({
  name: 'CustRequestWorkEffortResponseType',
  description: 'response type for CustRequestWorkEffort',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CustRequestWorkEffortResponseType};
    