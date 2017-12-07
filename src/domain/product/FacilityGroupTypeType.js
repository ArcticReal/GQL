
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityGroupType} from '../product/FacilityGroupType.js';


const FacilityGroupTypeType = new GraphQLObjectType({
  name: 'FacilityGroupTypeType',
  description: 'Type for FacilityGroupType in product',

  fields: () => ({
    facilityGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityGroup: {
      type: new GraphQLList(FacilityGroupType),
      args : {facilityGroupTypeId: {type: GraphQLString}},
      resolve: (facilityGroupType, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?facilityGroupTypeId=${facilityGroupType.facilityGroupTypeId}`)
    }
  })
});

export {FacilityGroupTypeType};
    