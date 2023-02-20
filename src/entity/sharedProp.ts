import {UpdateDateColumn, CreateDateColumn} from 'typeorm'

export class SharedProp {
    @CreateDateColumn({
        default: ()=> 'CURRENT_TIMESTAMP',
     type:'date',
      name:'Date_created'
    })
    createdAt: Date

    @UpdateDateColumn({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'date',
        name: 'updated_at'
    })
    updateAt: Date
}