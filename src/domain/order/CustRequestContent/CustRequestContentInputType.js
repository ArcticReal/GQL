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

const CustRequestContentInputType = new GraphQLInputObjectType({
  name: 'CustRequestContentInputType',
  description: 'input type for CustRequestContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {CustRequestContentInputType};
    