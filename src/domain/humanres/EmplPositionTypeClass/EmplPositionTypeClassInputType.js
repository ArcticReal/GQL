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

const EmplPositionTypeClassInputType = new GraphQLInputObjectType({
  name: 'EmplPositionTypeClassInputType',
  description: 'input type for EmplPositionTypeClass',

  fields: () => ({
    emplPositionClassTypeId: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    standardHoursPerWeek: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeClassInputType};
    