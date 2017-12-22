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

const WorkEffortIcalDataResponseType = new GraphQLObjectType({
  name: 'WorkEffortIcalDataResponseType',
  description: 'response type for WorkEffortIcalData',

  fields: () => ({
    icalData: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortIcalDataResponseType};
    