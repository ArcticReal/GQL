
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

import {FacilityGroupType} from '../product/FacilityGroup.js';


const FacilityGroupTypeType = new GraphQLObjectType({
  name: 'FacilityGroupTypeType',
  description: 'Type for FacilityGroupType in product',

  fields: () => ({
    facilityGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityGroups: {
      type: new GraphQLList(FacilityGroupType),
      args : {},
      resolve: (facilityGroupType, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityGroups/find?facilityGroupTypeId=${facilityGroupType.facilityGroupTypeId}`)
    }
  })
});

export {FacilityGroupTypeType};
    




const FacilityGroupTypeInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupTypeInputType',
  description: 'input type for FacilityGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    facilityGroupTypeId: {type: GraphQLString}
  })
});

export {FacilityGroupTypeInputType};
    