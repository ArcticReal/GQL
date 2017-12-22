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

const PicklistStatusHistoryResponseType = new GraphQLObjectType({
  name: 'PicklistStatusHistoryResponseType',
  description: 'response type for PicklistStatusHistory',

  fields: () => ({
    changeDate: {type: GraphQLString},
    changeUserLoginId: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    statusIdTo: {type: GraphQLString}
  })
});

export {PicklistStatusHistoryResponseType};
    