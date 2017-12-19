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

const WorkEffortIcalDataInputType = new GraphQLInputObjectType({
  name: 'WorkEffortIcalDataInputType',
  description: 'input type for WorkEffortIcalData',

  fields: () => ({
    icalData: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortIcalDataInputType};
    