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

const PicklistStatusHistoryInputType = new GraphQLInputObjectType({
  name: 'PicklistStatusHistoryInputType',
  description: 'input type for PicklistStatusHistory',

  fields: () => ({
    changeDate: {type: GraphQLString},
    changeUserLoginId: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    statusIdTo: {type: GraphQLString}
  })
});

export {PicklistStatusHistoryInputType};
    