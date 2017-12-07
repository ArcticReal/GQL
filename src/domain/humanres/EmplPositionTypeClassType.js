
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmplPositionClassTypeType} from '../humanres/EmplPositionClassTypeType.js';
import {EmplPositionTypeType} from '../humanres/EmplPositionTypeType.js';


const EmplPositionTypeClassType = new GraphQLObjectType({
  name: 'EmplPositionTypeClassType',
  description: 'Type for EmplPositionTypeClass in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    standardHoursPerWeek: {type: GraphQLFloat},
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeClass, args, {loaders}) => loaders.ofbiz.load(`emplPositionTypes/find?emplPositionTypeId=${emplPositionTypeClass.emplPositionTypeId}`)
    },
    emplPositionClassType: {
      type: EmplPositionClassTypeType,
      args : {emplPositionClassTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeClass, args, {loaders}) => loaders.ofbiz.load(`emplPositionClassTypes/find?emplPositionClassTypeId=${emplPositionTypeClass.emplPositionClassTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeClassType};
    