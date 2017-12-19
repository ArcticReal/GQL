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

const PayHistoryInputType = new GraphQLInputObjectType({
  name: 'PayHistoryInputType',
  description: 'input type for PayHistory',

  fields: () => ({
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    periodTypeId: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    salaryStepSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PayHistoryInputType};
    