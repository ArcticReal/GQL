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

const ReturnStatusInputType = new GraphQLInputObjectType({
  name: 'ReturnStatusInputType',
  description: 'input type for ReturnStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    returnStatusId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ReturnStatusInputType};
    