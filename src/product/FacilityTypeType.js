
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityType} from '../product/FacilityType.js';


const FacilityType = new GraphQLObjectType({
  name: 'FacilityTypeType',
  description: 'Type for FacilityType in product',

  fields: () => ({
    parentType: {
      type: FacilityTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`facilityTypes/find?facilityTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    facilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {FacilityType};
    