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

const CustRequestContentResponseType = new GraphQLObjectType({
  name: 'CustRequestContentResponseType',
  description: 'response type for CustRequestContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {CustRequestContentResponseType};
    